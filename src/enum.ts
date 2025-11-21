// // 🔥 Enum কী?

// // Enum হলো TypeScript-এ নামকৃত constant মানগুলোর একটি collection।
// // মানে, আপনি কিছু fixed value কে একটি নাম দিয়ে represent করতে পারেন, যাতে কোডটি Readable এবং Maintainable হয়।

// // সাধারণত: enum numeric বা string type হতে পারে।


// ✅ Enum ব্যবহার করার কারণ

// Readable code: 0, 1, 2 লিখার পরিবর্তে Direction.Up ব্যবহার করা যায়।

// Error কমানো: Hard-coded value ভুল হওয়ার সম্ভাবনা কমে।

// Switch statement-এ কাজে আসে: বিভিন্ন case handle করতে সহজ হয়।

enum UserRole{
    Admin="Admin",
    Editor="Editor",
    Viwer="Viewr",
}

const userData=(role:UserRole)=>{
    if(role === UserRole.Admin || role=== UserRole.Editor){
        return true;
    }else{
        return false
    };
};


const showData=userData(UserRole.Editor);
console.log(showData);


// Ai code a error deba

//  > enum UserRole{
//         Admin="Admin",
//         Editor="Editor",
//         Viwer="Viewr"
//   > }
    

// SyntaxError [ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX]: TypeScript enum is not supported in strip-only mode
//     at parseTypeScript (node:internal/modules/typescript:68:40)
//     at processTypeScriptCode (node:internal/modules/typescript:146:42)
//     at stripTypeScriptModuleTypes (node:internal/modules/typescript:209:22)
//     at Module._compile (node:internal/modules/cjs/loader:1712:15)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1480:32)
//     at Module._load (node:internal/modules/cjs/loader:1299:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5) {
//   code: 'ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX'
// }

// Node.js v24.11.0