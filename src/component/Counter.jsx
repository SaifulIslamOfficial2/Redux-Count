/* eslint-disable react/prop-types */

function Counter({value,onIncrement,onDecrement}) {

    
  return (
    <div className=" max-w-[400px] mx-auto border p-10 text-center">
        <h1 className="text-3xl  font-bold mb-3">count: {value}</h1>
        <div className=" flex justify-center">
            <button onClick={()=>onIncrement()} className=" text-white bg-green-600 py-2 px-3">Increment</button>
            <button onClick={()=> onDecrement()} className=" text-white bg-red-600 py-2 px-3">Decriment</button>
        </div>
    </div>
  )
}

export default Counter