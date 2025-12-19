import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, productRequirement, quantity, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.ENQUIRY_RECIPIENT_EMAIL || 'nirmalrajkumarofficial@gmail.com'

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Enquiry Form <onboarding@resend.dev>', // Update this with your verified domain
      to: recipientEmail,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <!-- CocoAgroTech Logo/Header -->
          <div style="text-align: center; margin-bottom: 30px; padding: 20px 0; border-bottom: 2px solid #2ea043;">
            <h1 style="color: #2ea043; font-size: 32px; font-weight: 700; margin: 0; letter-spacing: 1px; font-family: 'Archivo', Arial, sans-serif;">
              CocoAgroTech
            </h1>
            <p style="color: #656d76; font-size: 14px; margin: 8px 0 0 0; font-style: italic;">
              Premium Coco Substrates for Global Agriculture
            </p>
          </div>
          
          <h2 style="color: #2ea043; border-bottom: 2px solid #2ea043; padding-bottom: 10px; margin-top: 20px;">
            New Enquiry Received
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #1f2328; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #656d76; width: 150px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2328;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #656d76;">Email:</td>
                <td style="padding: 8px 0; color: #1f2328;"><a href="mailto:${email}" style="color: #2ea043;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #656d76;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2328;"><a href="tel:${phone}" style="color: #2ea043;">${phone}</a></td>
              </tr>
              ${productRequirement ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #656d76;">Product Requirement:</td>
                <td style="padding: 8px 0; color: #1f2328;">${productRequirement}</td>
              </tr>
              ` : ''}
              ${quantity ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #656d76;">Quantity/Volume:</td>
                <td style="padding: 8px 0; color: #1f2328;">${quantity}</td>
              </tr>
              ` : ''}
            </table>
            
            ${message ? `
            <h3 style="color: #1f2328; margin-top: 20px;">Message</h3>
            <div style="background-color: #f6f8fa; padding: 15px; border-radius: 6px; color: #1f2328; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            ` : ''}
          </div>
          
          <p style="color: #656d76; font-size: 12px; margin-top: 20px; text-align: center;">
            This enquiry was submitted through the CocoAgroTech website.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Enquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending enquiry:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


