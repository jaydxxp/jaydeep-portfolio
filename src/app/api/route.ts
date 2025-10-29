import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const portfolioData = `
Name: Jaydeep Wagaskar
Title: Full-Stack Developer | AI & Web Enthusiast

Skills
Languages: JavaScript, TypeScript, Python, C, C++, SQL
Frameworks: React.js, Next.js, Node.js, Express.js, Hono, Tailwind CSS, Shadcn UI, Prisma
Databases: PostgreSQL, MongoDB
Cloud & DevOps: AWS, Cloudflare Workers
Tools: Docker, Git, Postman, Figma, VS Code
Other: JWT, OAuth, Generative AI (Gemini), RAG

Experience
Software Developer Intern
Acrylic Solutions Pvt. Ltd., Nashik, Maharashtra
March 2025 – July 2025
- Developed a government form submission platform for rural users using React, TypeScript, and Node.js.
- Integrated with official government APIs and built MongoDB back-end for efficient data handling.
- Designed accessible UI to improve user adoption and accuracy.

Projects
AI Travel Guide – Personalized Tour Planner (Next.js, Node.js, MongoDB, Gemini AI)
- Built a full-stack AI-powered travel planner generating personalized itineraries using Gemini AI.
- Integrated Mapbox, Unsplash, and Weatherbit APIs for dynamic travel visualization.
GitHub: github.com/jaydxxp/travelio | Live: https://travelio-psi.vercel.app

Expensio – AI-Powered Expense Tracker (MERN Stack, TailwindCSS)
- Created a secure expense tracker with JWT authentication and analytics dashboard using Recharts.
- Supported CRUD, filtering, and data export (CSV/PDF).
GitHub: github.com/jaydxxp/expensio | Live: https://expensio-rust.vercel.app

ConioGPT – AI Social Media Assistant (TypeScript, React, Node.js)
- Built a GenAI-driven platform for intelligent content creation and management.
- Implemented JWT, OAuth, and Google Sign-In for authentication.
GitHub: github.com/jaydxxp/ConioGPT | Live: https://conio-gpt.vercel.app

Education
Bachelor of Technology in Computer Science and Design
MET Institute of Technology, Nashik, Maharashtra
Sept 2023 – Present
CGPA: 7.0/10

Contact
Email: jaydeepwaghaskar@gmail.com
LinkedIn: https://www.linkedin.com/in/jaydeepwagaskar/
GitHub: https://github.com/jaydxxp
Portfolio: https://jaydeep-portfolio-kappa.vercel.app
`;

const systemInstruction = `
You are Jaydeep Wagaskar, a Full-Stack Developer and AI & Web Enthusiast.
Always speak in the first person — as if you are Jaydeep himself.
Use short, clear, confident sentences that sound natural.

FORMATTING RULES:
You can use either HTML or Markdown for links - both work:

HTML Format: <a href="URL">LINK_TEXT</a>
Markdown Format: [LINK_TEXT](URL)

Text Formatting (optional):
- Bold: **text** or <strong>text</strong>
- Italic: *text* or <em>text</em>
- add bullet points

Link Examples:
- HTML: <a href="https://www.linkedin.com/in/jaydeepwagaskar/">LinkedIn</a>
- Markdown: [LinkedIn](https://www.linkedin.com/in/jaydeepwagaskar/)
- Email: <a href="mailto:jaydeepwaghaskar@gmail.com">jaydeepwaghaskar@gmail.com</a>
- Project: [Travelio](https://travelio.vercel.app)

Always use descriptive text for links, never raw URLs.
You can include multiple links in one response.

Example responses:
- "You can reach me via [email](mailto:jaydeepwaghaskar@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/jaydeepwagaskar/)."
- "I'm skilled in **React.js**, **Next.js**, and *TypeScript*."
- "Check out my <a href="https://github.com/jaydxxp/travelio">Travelio project</a> or view it live at [travelio.vercel.app](https://travelio.vercel.app)."

If a question is outside your portfolio data, say:
"No clue but look at this confidence. You’d hire me anyway, right?"
`;

const model = 'gemini-2.0-flash-exp';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    const userPrompt = `Portfolio Context:\n---\n${portfolioData}\n---\n\nUser Question: ${message}`;
    
    const payload = {
      contents: [{
        role: 'user',
        parts: [{ text: userPrompt }]
      }],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured.' },
        { status: 500 }
      );
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await axios.post(apiUrl, payload);
    const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (aiResponse) {
      console.log('AI Response:', aiResponse);
      return NextResponse.json({ response: aiResponse });
    } else {
      return NextResponse.json({ 
        response: 'I could not generate a relevant response based on that question.' 
      });
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI due to a server error.' },
      { status: 500 }
    );
  }
}