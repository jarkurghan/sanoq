"use client";

export default function BinaryPage() {
    return (
        <div className="flex">
            <div className="flex-1 container py-4 px-4 sm:px-8 max-w-6xl ml-0 lg:ml-64">
                <article className="prose max-w-none">
                    <h1 className="text-2xl font-bold mb-6">Binary Number System</h1>

                    <h2>What is the Binary System?</h2>
                    <p className="text-sm">
                        The binary number system is a base-2 number system that uses only two digits: 0 and 1. It is the foundation of all digital computing and
                        electronic systems.
                    </p>

                    <h2>Why is Binary Important?</h2>
                    <p className="text-sm">
                        Binary is fundamental to computing because electronic components can easily represent two states: on (1) and off (0). This makes binary
                        the natural language of computers.
                    </p>

                    <h2>Binary Counting</h2>
                    <p className="text-sm">In binary, each position represents a power of 2, starting from the rightmost digit:</p>
                    <ul className="text-sm">
                        <li>Rightmost digit: 2^0 = 1</li>
                        <li>Second from right: 2^1 = 2</li>
                        <li>Third from right: 2^2 = 4</li>
                        <li>Fourth from right: 2^3 = 8</li>
                        <li>And so on...</li>
                    </ul>

                    <h3>Examples of Binary Numbers</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Binary</th>
                                <th>Decimal</th>
                                <th>Calculation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>2</td>
                                <td>1×2^1 + 0×2^0 = 2</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>3</td>
                                <td>1×2^1 + 1×2^0 = 2 + 1 = 3</td>
                            </tr>
                            <tr>
                                <td>100</td>
                                <td>4</td>
                                <td>1×2^2 + 0×2^1 + 0×2^0 = 4</td>
                            </tr>
                            <tr>
                                <td>101</td>
                                <td>5</td>
                                <td>1×2^2 + 0×2^1 + 1×2^0 = 4 + 0 + 1 = 5</td>
                            </tr>
                            <tr>
                                <td>110</td>
                                <td>6</td>
                                <td>1×2^2 + 1×2^1 + 0×2^0 = 4 + 2 + 0 = 6</td>
                            </tr>
                            <tr>
                                <td>111</td>
                                <td>7</td>
                                <td>1×2^2 + 1×2^1 + 1×2^0 = 4 + 2 + 1 = 7</td>
                            </tr>
                            <tr>
                                <td>1000</td>
                                <td>8</td>
                                <td>1×2^3 + 0×2^2 + 0×2^1 + 0×2^0 = 8</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Binary Arithmetic</h2>
                    <p>Binary arithmetic follows similar rules to decimal arithmetic, but with only two digits.</p>

                    <h3>Binary Addition</h3>
                    <ul>
                        <li>0 + 0 = 0</li>
                        <li>0 + 1 = 1</li>
                        <li>1 + 0 = 1</li>
                        <li>1 + 1 = 10 (carry the 1)</li>
                    </ul>

                    <h3>Binary Subtraction</h3>
                    <ul>
                        <li>0 - 0 = 0</li>
                        <li>1 - 0 = 1</li>
                        <li>1 - 1 = 0</li>
                        <li>0 - 1 = 1 (borrow 1, which becomes 10 - 1 = 1)</li>
                    </ul>

                    <h2>Applications of Binary</h2>
                    <p>Binary is used in:</p>
                    <ul>
                        <li>Computer memory and storage</li>
                        <li>Digital logic and circuits</li>
                        <li>Data transmission</li>
                        <li>Machine code and low-level programming</li>
                        <li>Digital signal processing</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
