import React, { useEffect, useState } from 'react'


 export const WebView = (props) => {

  const [Wbview, setWbview] = useState(false)
  const [url, setUrl] = useState("")


  const WbComponent  = () => {

    return (
      <webview
        id="webview"
        src={url}
      />
    )
  }

  useEffect(() => {

    if (!props.loadUrl) {
      setUrl("https://drive.google.com/file/d/1R5N3wHBV8kTBMTAFLPvIJ_MFCOUKBZaL/view")
    }else{
      setUrl(props.loadUrl)
    }

    setWbview(true)
  }, [props.loadUrl])

  return (
    <>
      {Wbview ? <WbComponent/>:null}
    </>
  )
}
