import React from 'react'
import './calculator.css'
import { useState } from 'react'

export default function Calculator() {
    const [calc, setCalc] = useState(0)
    const [operator, setOperator] = useState()
    const [calc2, setCalc2] = useState()

    function inputValue(e) {
        if (calc === 0){
            setCalc(e.target.value)        
        } else {
            setCalc(calc+e.target.value)
        }
        
    }

    function clean() {
        setCalc(0)
    }

    function changeSign() {
        if(calc >= 0) {
            setCalc(- + calc)
        } else if(calc < 0) {
            setCalc(Math.abs(calc))
        }
    }

    function percentage(){
        setCalc(calc / 100)
    }

    function calculation(e) {
        var num1 = calc
        var oper = e.target.value
        alert(oper)
        setOperator(oper)
    }


  return (
    <div className='container'>
        <div className="content-container">
            <div className='display'>
                <h1 >{calc}</h1>
            </div>
            <div className='zero'><button onClick={inputValue} value='0'>0</button></div>
            <div className='one'><button onClick={inputValue} value='1'>1</button></div>
            <div className='two'><button onClick={inputValue} value='2'>2</button></div>
            <div className='three'><button onClick={inputValue} value='3'>3</button></div>
            <div className='four'><button onClick={inputValue} value='4'>4</button></div>
            <div className='five'><button onClick={inputValue} value='5'>5</button></div>
            <div className='six'><button onClick={inputValue} value='6'>6</button></div>
            <div className='seven'><button onClick={inputValue} value='7'>7</button></div>
            <div className='eight'><button onClick={inputValue} value='8'>8</button></div>
            <div className='nine'><button onClick={inputValue} value='9'>9</button></div>
            <div className='clear'><button onClick={clean}>AC</button></div>
            <div className='changeSign'><button onClick={changeSign}>+/-</button></div>
            <div className='percentage'><button onClick={percentage} value='%'>%</button></div>
            <div className='division'><button value='/'>/</button></div>
            <div className='multiplication'><button value='x'>X</button></div>
            <div className='subtraction'><button value='-'>-</button></div>
            <div className='add'><button onClick={calculation} value='+'>+</button></div>
            <div className='result'><button>=</button></div>
            <div className='comma'><button onClick={inputValue} value='.'>.</button></div>
        </div>
    </div>
  )
}
