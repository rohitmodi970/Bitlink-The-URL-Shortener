"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl('')
        setShortUrl('')
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate Your short urls</h1>
      <div className="flex flex-col gap-2">
        <input
          value={url}
          className='px-4 py-2 focus:outline-purple-600 rounded-md'
          type="text"
          placeholder='Enter your URL'
          onChange={e => { setUrl(e.target.value) }} />
        <input
          value={shortUrl}
          className='px-4 py-2 focus:outline-purple-600 rounded-md'
          type="text"
          placeholder='Enter your  preferred short URL text'
          onChange={e => { setShortUrl(e.target.value) }} />
        <button onClick={generate} className='bg-purple-500 shadow-lg p-3 rounded-lg text-white font-bold my-3'>Generate</button>
      </div>
      {generated && <>
        <span className='font-bold text-lg'>Your Link:</span>
        <code> <Link target='_blank' href={generated}>
          {generated}
        </Link>
        </code>
      </>}
    </div>
  )
}

export default Shorten
