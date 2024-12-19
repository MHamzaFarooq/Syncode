import CodeBlock from "../CodeBlock";
import CodingSpaceHeader from "./codingSpaceHeader";

const codeFromAPI = `// Write a C++ code to print “Hello, World!”
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`;

const CodingSpace = () => {
  return (
    <div className="flex-1 border border-[#FFFFFF26] rounded-xl flex flex-col">
      <CodingSpaceHeader />
      <div className="w-full flex-1">
        <CodeBlock code={codeFromAPI} />
      </div>
    </div>
  );
};

export default CodingSpace;
