import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <><Layout>
      <Head>
        <meta
          name="amp-script-src"
          content="sha384-hash"
        />
        <title>Adore Test</title>
      </Head>


      <main id="content" role="main" className="main commerce-listing">

        <section className="commerce-listing-content mx-auto flex flex-wrap pb4">

          <div className="col-12 md-col-7 pt2 pb3 md-px4 md-pt1 md-pb7">
            <div
              className="com md-commerce-header relative md-flex flex-wrap items-center md-mx0 md-mb2"
            >
              <h1 className="h31 mb2 md-mt2 md-mb2 md-ml0 flex-auto px2"
                >A <span> <div className="h32 mb2 md-mt2 md-mb2 md-ml0 px2"
                >D <span> <div className="h33 mb2 md-mt2 md-mb2 md-ml0 px2"
                >O <span> <div className="h34 mb2 md-mt2 md-mb2 md-ml0 px2"
                >R  <span> <div className="h35 mb2 md-mt2 md-mb2 md-ml0 px2"
                >E </div> </span> </div> </span> </div> </span> </div> </span></h1>

            </div>

            <amp-layout
              className="mx1 md-mxn1"
              layout="container"
            >
              <div>
                <div
                  className="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div className="flex flex-column justify-between">
                    <div>
                      <h2 className=" clpr commerce-listing-product-name h6"
                      > Soothing <b  className= "b" > Green </b> </h2>
                    </div>
                    <amp-layout  className = "amplayout">
                      <amp-script className = "ampscript"  data-ampdevmode src="/green.js" layout="fixed-height" height="25px">

                        <div className="quantity">
                          <div id="green_decrement" className="quantity__minus"><span>-</span></div>
                          <div id="green_count_display" className="quantity__input" />
                          <div id="green_increment" className="quantity__plus"><span>+</span></div>
                        </div>
                      </amp-script>

                    </amp-layout>
                  </div>
                </div>
                <div
                  className="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div className="flex flex-column justify-between">
                    <div>
                      <h2 className="commerce-listing-product-name h6" style={{textAlign: "center"}}> Brightly <b style={{color:"orange"}}> Orange </b> </h2>

                      <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                        <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/orange.js" layout="fixed-height" height="25px">

                          <div className="quantity">
                            <div id="orange_decrement" className="quantity__minus"><span>-</span></div>
                            <div id="orange_count_display" className="quantity__input" />
                            <div id="orange_increment" className="quantity__plus"><span>+</span></div>
                          </div>

                        </amp-script>
                      </amp-layout>

                    </div>

                  </div>
                </div>
                <div

                  className="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div className="flex flex-column justify-between">
                    <div>
                      <h2 className="commerce-listing-product-name h6"style={{textAlign: "center"}} > Royally <b style={{color:"hotpink"}}> Pink </b> </h2>

                      <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                        <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/pink.js" layout="fixed-height" height="25px">
                          <div className="quantity">
                            <div id="pink_decrement" className="quantity__minus"><span>-</span></div>
                            <div id="pink_count_display" className="quantity__input" />
                            <div id="pink_increment" className="quantity__plus"><span>+</span></div>
                          </div>

                        </amp-script>
                      </amp-layout>
                    </div>

                  </div>
                </div>
                <div
                  className="commerce-listing-product text-decoration-none inline-block col-6 md-col-4 lg-col-3 px1 mb2 md-mb4 relative"
                >
                  <div className="flex flex-column justify-between" >
                    <div>

                      <h2 className="commerce-listing-product-name h6" style={{textAlign: "center"}}> Usually <b style={{color:"blue"}}> Blue </b> </h2>
                    </div>
                    <amp-layout style={{ justifyContent: "space-around", alignItems: "center" }}>
                      <amp-script style={{ marginLeft: "auto" }} data-ampdevmode src="/blue.js" layout="fixed-height" height="25px">

                        <div className="quantity">
                          <div id="blue_decrement" className="quantity__minus"><span>-</span></div>
                          <div id="blue_count_display" className="quantity__input" />
                          <div id="blue_increment" className="quantity__plus"><span>+</span></div>
                        </div>
                      </amp-script>
                    </amp-layout>
                  </div>
                </div>
              </div>
            </amp-layout>
          </div>

        </section>
      </main>
    </Layout>
    </>
  )
}
