import React from 'react'
export default function About(props) {
  return (
    <>
    
    <h1 className={`container mt-5 text-${props.mode==='light'?'dark':'light'}`}>About Us</h1>
    <hr className="container"/>
    <p className={` container text-${props.mode==='light'?'dark':'light'}`}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis condimentum ex. Suspendisse vel ante pellentesque, pharetra sem quis, condimentum orci. Sed malesuada enim et felis tempus, sit amet molestie urna rhoncus. Proin eget finibus libero, vitae pretium sapien. Mauris dapibus dignissim velit eget pellentesque. Sed vitae placerat ligula. Suspendisse nec diam at elit scelerisque facilisis vitae sed tellus. Donec bibendum arcu eget lorem congue commodo sed nec lacus. Vivamus enim eros, tincidunt ut sem id, accumsan iaculis lacus. Duis tincidunt libero et mauris rutrum lobortis.</p>

    <p className={` container text-${props.mode==='light'?'dark':'light'}`}>Suspendisse a pulvinar sem. Aenean consectetur luctus diam, id consequat mauris laoreet eget. Sed sed libero justo. Maecenas at ipsum et dolor pharetra maximus ac a dui. Fusce turpis neque, dapibus at dapibus quis, venenatis vel turpis. Phasellus id sapien in tortor sollicitudin rhoncus a a tortor. Integer felis quam, faucibus in iaculis quis, efficitur a ante. Phasellus leo neque, molestie ac malesuada a, tincidunt eget velit. Vestibulum ut quam sed nulla aliquam sollicitudin eget at ipsum. In rutrum tincidunt metus, lacinia volutpat sem ultricies quis. Aliquam malesuada dignissim laoreet.</p>

    <p className={` container text-${props.mode==='light'?'dark':'light'}`}>Proin laoreet diam eu nulla tincidunt, eget faucibus lacus bibendum. Sed vehicula tincidunt elit, id iaculis felis pulvinar a. Sed et velit urna. Sed nec semper orci. Pellentesque libero sapien, semper ac ullamcorper id, blandit at neque. Nulla dapibus augue mauris, at sollicitudin dolor imperdiet nec. Nunc aliquet tellus ac orci laoreet malesuada.</p>

    <p className={` container text-${props.mode==='light'?'dark':'light'}`}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eleifend rutrum ex, eu iaculis dui laoreet id. Praesent sit amet risus et nibh pretium pellentesque a a felis. Vestibulum vitae velit rhoncus, lobortis sapien sit amet, suscipit ex. Integer blandit velit ac nulla lobortis molestie. Ut lobortis felis et est ullamcorper, vel sollicitudin ex pellentesque. Donec venenatis rhoncus elit eu auctor. Suspendisse potenti. Maecenas dignissim facilisis consequat. Ut eget vulputate velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

    <p className={` container text-${props.mode==='light'?'dark':'light'}`}>Vestibulum congue eros tellus, id ultricies tellus iaculis id. Nullam viverra leo vitae metus mollis, non dignissim orci convallis. Fusce nec augue eu urna hendrerit gravida nec eget nulla. Nam dignissim venenatis velit, et efficitur libero lobortis ut. Sed semper ac sapien et varius. Nunc vitae lorem tortor. Morbi egestas quis ligula eu rutrum. Sed vulputate arcu at ipsum scelerisque, sit amet ultrices arcu sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum posuere accumsan porta. In facilisis non nisi eget luctus. Integer ac elit eget neque consectetur mattis.
    </p>
    
    </>
  )
}
