"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function StandartCalculator({ clearDisplay, base }: { clearDisplay: () => void; base: string }) {
  const { t } = useLanguage()

  // const searchParams = useSearchParams();
  // const base = searchParams.get("base") || DEFAULT_NUMBER_SYSTEM;

  const [display, setDisplay] = useState("0")
  const [topDisplay, setTopDisplay] = useState("")
  const [firstOperand, setFirstOperand] = useState<string | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit)
      setWaitingForSecondOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const performOperation = (nextOperator: string) => {
    const inputValue = display

    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      setDisplay(result)
      setFirstOperand(result)
    }

    setWaitingForSecondOperand(true)
    setOperator(nextOperator)
  }

  const calculate = (firstOperand: string, secondOperand: string, operator: string) => {
    const first = Number.parseInt(firstOperand, Number.parseInt(base))
    const second = Number.parseInt(secondOperand, Number.parseInt(base))

    let result: number

    switch (operator) {
      case "+":
        result = first + second
        break
      case "-":
        result = first - second
        break
      case "*":
        result = first * second
        break
      case "/":
        result = Math.floor(first / second)
        break
      case "AND":
        result = first & second
        break
      case "OR":
        result = first | second
        break
      case "XOR":
        result = first ^ second
        break
      case "<<":
        result = first << second
        break
      case ">>":
        result = first >> second
        break
      default:
        return secondOperand
    }

    return result.toString(Number.parseInt(base)).toUpperCase()
  }

  const handleEquals = () => {
    if (!firstOperand || !operator) return

    const inputValue = display
    const result = calculate(firstOperand, inputValue, operator)

    setDisplay(result)
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
  }

  const getAvailableDigits = () => {
    const baseNum = Number.parseInt(base)
    const digits = []

    for (let i = 1; i < Math.min(baseNum, 10); i++) {
      digits.push(i.toString())
    }

    if (baseNum > 10) {
      for (let i = 10; i < baseNum; i++) {
        digits.push(String.fromCharCode(65 + i - 10)) // A, B, C, etc.
      }
    }

    return digits
  }

  // Добавим функцию для удаления последнего символа
  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
    }
  }

  // Добавим функцию для смены знака числа
  const handleSignChange = () => {
    if (display !== "0") {
      const baseNum = Number.parseInt(base)
      const decimalValue = Number.parseInt(display, baseNum)
      const negatedValue = -decimalValue
      setDisplay(negatedValue.toString(baseNum).toUpperCase())
    }
  }

  // Добавим функцию для вычисления обратного числа (1/x)
  const handleReciprocal = () => {
    const baseNum = Number.parseInt(base)
    const decimalValue = Number.parseInt(display, baseNum)

    if (decimalValue === 0) {
      setDisplay("Error")
      return
    }

    const reciprocalValue = Math.floor(1 / decimalValue)
    setDisplay(reciprocalValue.toString(baseNum).toUpperCase())
  }

  // Добавим функцию для вычисления процента
  const handlePercentage = () => {
    const baseNum = Number.parseInt(base)
    const decimalValue = Number.parseInt(display, baseNum)
    const percentValue = decimalValue / 100
    setDisplay(Math.floor(percentValue).toString(baseNum).toUpperCase())
  }

  // Добавим функцию для вычисления квадрата числа
  const handleSquare = () => {
    const baseNum = Number.parseInt(base)
    const decimalValue = Number.parseInt(display, baseNum)
    const squaredValue = decimalValue * decimalValue
    setDisplay(squaredValue.toString(baseNum).toUpperCase())
  }

  // Добавим функцию для вычисления квадратного корня
  const handleSquareRoot = () => {
    const baseNum = Number.parseInt(base)
    const decimalValue = Number.parseInt(display, baseNum)

    if (decimalValue < 0) {
      setDisplay("Error")
      return
    }

    const sqrtValue = Math.floor(Math.sqrt(decimalValue))
    setDisplay(sqrtValue.toString(baseNum).toUpperCase())
  }

  // Добавим функцию для добавления десятичной точки
  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.")
      setWaitingForSecondOperand(false)
      return
    }

    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const digits = getAvailableDigits()

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-end font-mono h-16 bg-muted/50 border rounded-md overflow-x-auto px-4 py-1">
        <div className="text-sm text-gray-500">{topDisplay !== "" ? topDisplay : <>&nbsp;</>}</div>
        <div className="text-2xl">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button variant="outline" onClick={() => performOperation("/")} className="text-primary">
          ÷
        </Button>
        <Button variant="outline" onClick={() => performOperation("*")} className="text-primary">
          ×
        </Button>

        <Button variant="outline" onClick={() => performOperation("-")} className="text-primary">
          -
        </Button>
        <Button variant="outline" onClick={() => performOperation("+")} className="text-primary">
          +
        </Button>
        <Button variant="outline" onClick={handleSignChange} className="text-primary">
          ±
        </Button>
        <Button variant="outline" onClick={handleReciprocal} className="text-primary">
          1/x
        </Button>
        <Button variant="outline" onClick={handlePercentage} className="text-primary">
          %
        </Button>
        <Button variant="outline" onClick={handleEquals} className="col-span-1 text-primary">
          =
        </Button>
        <Button variant="outline" onClick={handleSquare} className="text-primary">
          x²
        </Button>
        <Button variant="outline" onClick={handleSquareRoot} className="text-primary">
          √x
        </Button>
        <Button variant="outline" className="text-primary" onClick={clearDisplay}>
          Clear
        </Button>
        <Button variant="outline" className="text-primary" onClick={handleDelete}>
          ⌫
        </Button>

        {digits.map((digit) => (
          <Button
            key={digit}
            variant="outline"
            onClick={() => inputDigit(digit)}
            className={digit >= "A" ? "bg-muted/50" : ""}
          >
            {digit}
          </Button>
        ))}
        {Number.parseInt(base) % 4 === 0 && (
          <Button variant="outline" onClick={inputDecimal} className={"col-span-1"}>
            {"."}
          </Button>
        )}
        <Button
          variant="outline"
          onClick={() => inputDigit("0")}
          className={"col-span-" + (4 - (Number.parseInt(base) % 4))}
        >
          {"0"}
        </Button>
        {Number.parseInt(base) % 4 !== 0 && (
          <Button variant="outline" onClick={inputDecimal} className={"col-span-1"}>
            {"."}
          </Button>
        )}
      </div>
    </div>
  )
}
