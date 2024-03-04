Setup TypeScript
________________
1. Download Node JS
2. Download VSCode
3. Intial Setup
  a. mkdir typescript-starter
  b. cd typescript-starter
4. Setup Node.js package.json
  a. npm init -y
5. Add TypeScript as a dev dependency
  a. npm install typescript --save-dev
  b. verify package.json for depenedency
6. Create a ts file eg: hello.ts 
  a. Run the ts file > tsc hello.ts
  b. Run the ts file > node hello.ts

TS Compiler 
-------------
1. Automatic refresh changes in js file 
			00-TestTSCompiler % tsc 1-app.ts --watch;  

2. Compiling Multiple ts file in one go 
		a. 00-TestTSCompiler % tsc --init     // It will create a tsconfig.json file - How file should compile
		b.  00-TestTSCompiler % tsc. 	       // It will automatically converts all ts to js  in one go 
3. Exclude few ts file 
		a. Open tsconfig.json file. 
                b. Add following just before closing
		c. 	 }, "exclude": [
    					"*.dev.ts",
    					"2-app2.ts",
    					"node_modules" //It is default
 					 ],
				  "include": [
						    "1-*.ts"
						  ]
			}
