import { FiMenu } from "react-icons/fi"
import React from "react"

const Header = () => {
    const [show, setShow] = React.useState(false)

    const Toggle = () => {
        setShow(!show)
    }
  return (
      <div className="w-[100%] h-[70px] bg-[#2A2C2F] flex justify-center items-center relative">
          <div className="w-[95%] h-[100%] flex items-center justify-between">
              <h1 className="text-[30px] font-semibold text-[#fff]">CWM</h1>

              <div className="flex max-md:hidden">
                  <h3 className="text-[#fff] m-3 font-medium">Trustees</h3>
                  <h3 className="text-[#fff] m-3 font-medium">Interface</h3>
                  <h3 className="text-[#fff] m-3 font-medium">Features</h3>
                  <h3 className="text-[#fff] m-3 font-medium">Customer Support</h3>
              </div>

              <div className="flex items-center">
                  <button className="max-sm:hidden bg-[#ff7417] h-[40px] w-[120px] items-center justify-center text-white rounded-lg">
                  Get started
              </button>

              <div className="text-[25px] m-3 hidden max-md:flex cursor-pointer" onClick={Toggle}>
                  <FiMenu />
              </div>
              </div>
          </div>

          {show ? (
              <div className="absolute w-[200px] bg-[gray] right-[15px] top-[70px] rounded-md  column justify-center items-center p-[10px]">
              <h3 className="text-[#fff] m-3 font-medium">Trustees</h3>
                  <h3 className="text-[#fff] m-3 font-medium">Interface</h3>
                  <h3 className="text-[#fff] m-3 font-medium">Features</h3>
              <h3 className="text-[#fff] m-3 font-medium">Customer Support</h3>
              <button className="bg-[#ff7417] h-[40px] w-[100%] items-center justify-center text-white rounded-lg">
                  Get started
              </button>
          </div>
          ) : null}
    </div>
  )
}

export default Header