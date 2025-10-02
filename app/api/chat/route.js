import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  try {
    const { messages } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a helpful teaching assistant for Dr. Lee's Machine Learning Operations (MLOps) course at Florida Atlantic University. 
          
Your role is to:
- Answer questions about MLOps concepts, tools, and best practices
- Explain topics covered in the course including: ML pipelines, model deployment, CI/CD, monitoring, containerization, cloud platforms
- Help students understand assignments and projects
- Provide guidance on MLflow, Kubeflow, Docker, Kubernetes, and cloud ML services
- Clarify course policies and requirements when asked

Keep responses clear, educational, and encouraging. If you're unsure about specific course details, recommend students contact Dr. Lee directly at lee@fau.edu.`
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    return NextResponse.json({ 
      message: completion.choices[0].message.content 
    })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    )
  }
}
