//metros that modifiy the original array (Mutability)
//shift()
const listsong = ['Love', 'Hate', 'hate2'];

const NewSong  = 'Lala'
// const removedColors = colors.shift()
// console.log(colors)
// console.log(removedColors)

function nombreDeLaFuncion(listsong, NewSong) {
    listsong.shift();
    listsong.push(NewSong);
    return listsong;
  }
  console.log('Initial playlist ', listsong)
  console.log('Song to Add ', NewSong)
  let Newlistsong = nombreDeLaFuncion(listsong, NewSong) ;
  console.log('Final playLis ', Newlistsong)