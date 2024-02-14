import React from 'react'

export default function nose({
  params,
}:{
  params  : { appid : string };
}) {
  return (
    <h1>nose {params.appid}</h1>
  )
}
