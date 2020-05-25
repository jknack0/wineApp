import React, { useEffect } from 'react'
import Quagga from 'quagga'
import history from '../../History'

// eslint-disable-next-line react/prop-types
const CameraWindow = ({ type }) => {
  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        constraints: {
          width: '480',
          height: '640'
        },
        numberOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector('#barcodeScan')
      },
      locate: true,
      decoder: {
        readers: ['code_128_reader', 'upc_reader', 'upc_e_reader']
      }
    }, function (err) {
      if (err) {
        return
      }
      Quagga.start()
    })
    Quagga.onDetected(onDetect)
    return () => {
      Quagga.stop()
      Quagga.offProcessed()
    }
  }, [])

  const onDetect = (res) => {
    console.log('Code', res.codeResult.code)
    Quagga.stop()
    Quagga.offProcessed()
    history.push(`/barcode/results/${type}/${res.codeResult.code}`)
  }

  return (
    <div id='barcodeScan'></div>
  )
}

export default CameraWindow
