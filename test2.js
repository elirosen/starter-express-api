const users = [  
    { id: 1, name: 'Marcus' },
    { id: 2, name: 'Norman' },
    { id: 3, name: 'Christian' }
  ]
  

  const containsMarcus = !!users.find(users => {  
    return users.name === 'Marcus'
  })
  // true
  //console.log(containsMarcus)


  const hero = {
    name: 'Batman'
  };


console.log('namse' in hero)     // => true