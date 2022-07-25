import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Script from 'next/script'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        {/* <script
                            dangerouslySetInnerHTML={{
                                __html: `
        !function(e){if(!window.pintrk){window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
          n=window.pintrk;n.queue=[],n.version="3.0";var
          t=document.createElement("script");t.async=!0,t.src=e;var
          r=document.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
        pintrk('load', '2613059152744', {em: 'fsd1@sellsage.com'});
        pintrk('page');
      ` , 
                            }}
                        /> */}
                        <link
                            rel="apple-touch-icon"
                            sizes="180x180"
                            href="/favicon/apple-touch-icon.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="32x32"
                            href="/favicon/favicon-32x32.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="16x16"
                            href="/favicon/favicon-16x16.png"
                        />
                        <link rel="manifest" href="/favicon/site.webmanifest" />
                        <link
                            rel="mask-icon"
                            href="/favicon/safari-pinned-tab.svg"
                            color="#5bbad5"
                        />
                        <meta name="theme-color" content="#ffffff" />

                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
