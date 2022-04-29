import React from 'react'

// function ForwardRefs() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

const ForwardRefs = React.forwardRef ((props,ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}
)

export default ForwardRefs;
