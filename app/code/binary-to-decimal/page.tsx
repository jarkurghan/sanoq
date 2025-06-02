"use client"

import { Card, CardContent } from "@/components/ui/card"
import RightSidebarContent from "@/components/right-sidebar-content"

export default function BinaryToDecimalPage() {
  return (
    <div className="flex">
      <div className="flex-1 container py-4 max-w-6xl ml-0 lg:ml-64">
        <article className="prose max-w-none">
          <h1 className="text-2xl font-bold mb-6">Binary to Decimal Conversion</h1>

          <p className="text-sm">
            Converting binary numbers to decimal is a fundamental operation in computer science. Here are several ways
            to implement this conversion in different programming languages.
          </p>

          <h2>JavaScript Implementation</h2>

          <Card className="not-prose mb-6">
            <CardContent className="p-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code className="language-javascript">{`// Method 1: Using parseInt
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Method 2: Manual conversion
function binaryToDecimalManual(binary) {
  let decimal = 0;
  const binaryStr = binary.toString();
  
  for (let i = 0; i < binaryStr.length; i++) {
    const digit = parseInt(binaryStr[binaryStr.length - 1 - i]);
    if (digit === 1) {
      decimal += Math.pow(2, i);
    }
  }
  
  return decimal;
}

// Examples
console.log(binaryToDecimal('1010'));  // Output: 10
console.log(binaryToDecimalManual('1010'));  // Output: 10`}</code>
              </pre>
            </CardContent>
          </Card>

          <h2>Python Implementation</h2>

          <Card className="not-prose mb-6">
            <CardContent className="p-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code className="language-python">{`# Method 1: Using int
def binary_to_decimal(binary):
    return int(str(binary), 2)

# Method 2: Manual conversion
def binary_to_decimal_manual(binary):
    binary_str = str(binary)
    decimal = 0
    
    for i in range(len(binary_str)):
        digit = int(binary_str[len(binary_str) - 1 - i])
        if digit == 1:
            decimal += 2 ** i
    
    return decimal

# Examples
print(binary_to_decimal(1010))  # Output: 10
print(binary_to_decimal_manual(1010))  # Output: 10`}</code>
              </pre>
            </CardContent>
          </Card>

          <h2>Java Implementation</h2>

          <Card className="not-prose mb-6">
            <CardContent className="p-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code className="language-java">{`public class BinaryToDecimal {
    // Method 1: Using Integer.parseInt
    public static int binaryToDecimal(String binary) {
        return Integer.parseInt(binary, 2);
    }
    
    // Method 2: Manual conversion
    public static int binaryToDecimalManual(String binary) {
        int decimal = 0;
        
        for (int i = 0; i < binary.length(); i++) {
            char digit = binary.charAt(binary.length() - 1 - i);
            if (digit == '1') {
                decimal += Math.pow(2, i);
            }
        }
        
        return decimal;
    }
    
    public static void main(String[] args) {
        String binary = "1010";
        System.out.println(binaryToDecimal(binary));  // Output: 10
        System.out.println(binaryToDecimalManual(binary));  // Output: 10
    }
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <h2>C++ Implementation</h2>

          <Card className="not-prose mb-6">
            <CardContent className="p-4">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code className="language-cpp">{`#include <iostream>
#include <string>
#include <cmath>

// Method 1: Using stoi
int binaryToDecimal(const std::string& binary) {
    return std::stoi(binary, nullptr, 2);
}

// Method 2: Manual conversion
int binaryToDecimalManual(const std::string& binary) {
    int decimal = 0;
    
    for (int i = 0; i < binary.length(); i++) {
        char digit = binary[binary.length() - 1 - i];
        if (digit == '1') {
            decimal += std::pow(2, i);
        }
    }
    
    return decimal;
}

int main() {
    std::string binary = "1010";
    std::cout << binaryToDecimal(binary) << std::endl;  // Output: 10
    std::cout << binaryToDecimalManual(binary) << std::endl;  // Output: 10
    
    return 0;
}`}</code>
              </pre>
            </CardContent>
          </Card>

          <h2>Algorithm Explanation</h2>

          <p className="text-sm">The manual conversion algorithm works as follows:</p>

          <ol>
            <li>Initialize a decimal value to 0</li>
            <li>Iterate through each digit of the binary number from right to left</li>
            <li>
              For each digit at position i (starting from 0):
              <ul>
                <li>If the digit is 1, add 2^i to the decimal value</li>
                <li>If the digit is 0, do nothing</li>
              </ul>
            </li>
            <li>Return the final decimal value</li>
          </ol>

          <p className="text-sm">
            This algorithm has a time complexity of O(n), where n is the number of digits in the binary number.
          </p>
        </article>
      </div>

      {/* Right sidebar as part of the content */}
      <div className="hidden lg:block">
        <RightSidebarContent />
      </div>
    </div>
  )
}
