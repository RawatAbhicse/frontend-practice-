import React from 'react'
import Section1 from './components/section1/Section1.jsx'
import Section2 from './components/section2/Section2.jsx'

const App = () => {

  const users = [
    { 
      img:'https://images.unsplash.com/photo-1766570764539-297a1cd82956?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:' ',
      color:'royalblue',
      tag:'Satisfied'
    },
     { 
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
     { 
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:' ',
      color:'orange',
      tag:'Underbanked'
    },
     { 
      img:'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:' ',
      color:'black',
      tag:'Underwear'
    }
  ]
  return (
    <div> 
      <Section1 users ={users}/>
      <Section2 />
    </div>
  )
}

export default App