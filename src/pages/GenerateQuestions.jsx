import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './GenerateQuestion.css'
export function GenerateQuestions() {
  function req2(){
    const msg = document.getElementById("input").value;
    const request = {
      method: 'POST',
      responseType: 'arraybuffer',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msg)
  };

    fetch("http://127.0.0.1:5000/get-file/timepass.xlsx",request)
    .then((res) => { return res.blob(); })
    .then((data) => {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(data);
    a.download = "Questions.xlsx";
    a.click();
    window.location.href = "/";
});
  }
  return (
    <div className='wrapper'>
      <Navbar />
        <section className='content' id="para">
          <div className='content__input'>
            <label>
                <textarea name="text__inp" id="input" cols="80" rows="15" placeholder='Input Paragraph' className='text__inp'></textarea>
            </label>
          </div>
          <button className='generate__btn' onClick={() => req2()}>Generate</button>
        </section>
    </div>
  )
}
