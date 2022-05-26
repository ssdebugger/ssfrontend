import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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
                       <meta name='title' content='Compostable Plates & Gloves | Disposable Eco Products'>
                       </meta>
                        <meta
                            name="description"
                            content="Go plastic-free with compostable & biodegradable plates, bowls, trays, utensils, and gloves!  Elegant disposable dinnerware for wedding, party and events!"
                        ></meta>
                        <script 
      dangerouslySetInnerHTML={{ __html:`
      <script>
!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', '2613059152744', {em: '<user_email_address>'});
pintrk('page');
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt=""
  src="https://ct.pinterest.com/v3/?event=init&tid=2613059152744&pd[em]=<hashed_email_address>&noscript=1" />
</noscript>
      ` }}
      />
            <script 
      dangerouslySetInnerHTML={{ __html:`
      <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '776492553756503');
      fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=776492553756503&ev=PageView&noscript=1"
      /></noscript>`}}
      />
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
