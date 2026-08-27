const AI_CONFIG_KEY = 'sales-field-ai-config-v1';

export function getAiConfig() {
  try {
    return JSON.parse(localStorage.getItem(AI_CONFIG_KEY) || '{}');
  } catch {
    return {};
  }
}

export function saveAiConfig(config) {
  localStorage.setItem(AI_CONFIG_KEY, JSON.stringify({
    apiKey: config.apiKey?.trim() || '',
    model: config.model?.trim() || 'gpt-4o-mini'
  }));
}

export function hasAiCoach() {
  return Boolean(getAiConfig().apiKey);
}

export async function askAiCoach({ stage, person, playerText, localJudge }) {
  const config = getAiConfig();
  if (!config.apiKey) return null;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      model: config.model || 'gpt-4o-mini',
      temperature: 0.7,
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: '你是大客户销售训练游戏的AI客户和销售教练。只返回JSON，不要Markdown。JSON字段：score为12到94的整数，reply为客户第一人称回应，coach为一句具体销售教练反馈。'
        },
        {
          role: 'user',
          content: JSON.stringify({
            stage,
            customer: {
              name: person.name,
              title: person.title,
              role: person.role,
              concern: person.concern,
              motive: person.motive,
              attitude: person.attitude
            },
            playerText,
            localJudge
          })
        }
      ]
    })
  });

  if (!response.ok) throw new Error('AI coach request failed');
  const data = await response.json();
  const parsed = JSON.parse(data.choices?.[0]?.message?.content || '{}');
  return {
    score: Math.max(12, Math.min(94, Number(parsed.score) || localJudge.score)),
    reply: String(parsed.reply || localJudge.reply),
    coach: String(parsed.coach || localJudge.coach)
  };
}
