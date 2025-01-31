// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { 
//   Dialog, 
//   DialogContent, 
//   DialogHeader, 
//   DialogTitle, 
//   DialogDescription,
//   DialogFooter,
//   DialogClose 
// } from "@/components/ui/dialog";

// export default function OptionsModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };

//   const handleOptionSelect = (option) => {
//     console.log({option});
//     handleCloseModal();
//   };

//   return (
//     <div>
//       <Button onClick={handleOpenModal}>
//         Abrir Opciones
//       </Button>

//       <Dialog open={isOpen} onOpenChange={handleCloseModal}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Selecciona una Opción</DialogTitle>
//             <DialogDescription>
//               Elige una de las siguientes opciones disponibles.
//             </DialogDescription>
//           </DialogHeader>

//           <div className="space-y-4">
//             <Button 
//               variant="outline" 
//               className="w-full" 
//               onClick={() => handleOptionSelect('Opción 1')}
//             >
//               Opción 1
//             </Button>
//             <Button 
//               variant="outline" 
//               className="w-full" 
//               onClick={() => handleOptionSelect('Opción 2')}
//             >
//               Opción 2
//             </Button>
//             <Button 
//               variant="outline" 
//               className="w-full" 
//               onClick={() => handleOptionSelect('Opción 3')}
//             >
//               Opción 3
//             </Button>
//           </div>

//           <DialogFooter>
//             <DialogClose asChild>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Cancelar
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
