import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './GenerateQuestion.css'
export function GenerateQuestions() {
  function req2(){
    const para = document.getElementById("text_input").value;
    const num = document.getElementById("num_input").value;
    // console.log(JSON.stringify([para,Number(num)]))
    const request = {
      method: 'POST',
      responseType: 'arraybuffer',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify([para,Number(num)])
  };

    fetch("http://127.0.0.1:5000/get/mcqs.xlsx",request)
    .then((res) => { return res.blob(); })
    .then((data) => {
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(data);
    a.download = "mcqs.xlsx";
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
                <textarea name="text__inp" id="text_input" cols="80" rows="15" placeholder='Input Paragraph' className='text__inp'></textarea>
                <input type="number" name="num__inp" id="num_input" placeholder='Enter number of questions' className='num__inp' min="1"></input>
            </label>
          </div>
          <button className='generate__btn' onClick={() => req2()}>Generate</button>
        </section>
    </div>
  )
}
