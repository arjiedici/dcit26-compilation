import React from 'react';
import {View, Text, StyleSheet, Modal, Button, ScrollView, Image} from 'react-native';

const SampleModal = props => {
  return (
    <View>
      <Modal visible={props.visible} animationType='fade'>
        <ScrollView style={style.view}>

         <View style={style.container}>
         <Image style={style.img}
         source={{uri: 'https://i.stack.imgur.com/1dpmw.gif'}} />
         </View>

         <Text style={style.text}>
        {'\t\t\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat. Hendrerit gravida rutrum quisque non tellus orci ac. Maecenas pharetra convallis posuere morbi leo. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Porttitor lacus luctus accumsan tortor. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Justo nec ultrices dui sapien eget. Faucibus ornare suspendisse sed nisi lacus sed. Amet venenatis urna cursus eget nunc scelerisque viverra. Et ligula ullamcorper malesuada proin libero nunc consequat. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Massa massa ultricies mi quis hendrerit. Nullam ac tortor vitae purus. Et ligula ullamcorper malesuada proin. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Turpis nunc eget lorem dolor sed viverra ipsum nunc.{'\n\n'}
        {'\t\t\t'}Duis viverra justo sed elit sollicitudin mattis. Vestibulum feugiat vel libero in molestie. Quisque pulvinar viverra feugiat. Fusce mattis ornare libero et sodales. Donec non orci nec lacus aliquet vulputate eu nec mauris. Donec in orci eget arcu sodales tempus. Integer suscipit blandit posuere. Donec ut porta nisi. Sed eget sem laoreet nisi congue egestas id in odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent aliquam nisi diam, ut commodo nisi scelerisque quis. Vestibulum sollicitudin tincidunt tortor, sit amet viverra sem dapibus ac. Nullam viverra dolor nec nibh eleifend, a venenatis orci cursus. Proin a mauris sodales, consequat libero vitae, commodo risus. Vivamus feugiat arcu et nulla maximus, vel ultrices purus placerat.{'\n\n'}
         {'\t\t\t'} Sed eros nunc, aliquam nec iaculis et, vestibulum nec lorem. Morbi scelerisque aliquet facilisis. Suspendisse vulputate, risus at convallis fermentum, diam ante semper augue, et pulvinar urna orci vel augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempor risus vitae purus finibus pharetra sit amet sagittis nulla. Vestibulum facilisis diam quis odio tempor rhoncus. Quisque et aliquam risus, at suscipit enim. In finibus, libero id dignissim luctus, lorem ante sollicitudin purus, eget auctor purus ante sit amet erat. Suspendisse et mattis lectus, sed ultricies nulla. Quisque varius accumsan quam, sit amet consectetur tellus lacinia eu. Vestibulum imperdiet libero nisl, in vehicula felis efficitur at. Donec vitae ultrices elit, et rutrum nunc. Duis id nibh ligula. Proin hendrerit sapien eros, id ultricies tellus laoreet a. Curabitur viverra ligula vitae enim imperdiet lobortis eget at dui.{'\n\n'}
        {'\t\t\t'}Nunc in ipsum in mauris feugiat interdum. Pellentesque sed ultrices felis. Duis ut diam hendrerit, fringilla neque et, posuere nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet lacus lectus, sed mollis dui lobortis et. Donec sed aliquam leo. Suspendisse potenti. Vivamus luctus aliquet facilisis. Quisque iaculis, ligula sed aliquet imperdiet, nisl nisl porta felis, vitae aliquet risus felis malesuada felis. Nam maximus aliquam nunc, id molestie metus tristique sit amet.{'\n\n'}
        {'\t\t\t'}Donec vehicula sit amet elit nec sollicitudin. Integer cursus leo justo, ut eleifend ante convallis non. Vestibulum sed leo et sapien volutpat fringilla. Duis lacus magna, facilisis nec arcu id, hendrerit facilisis magna. In faucibus cursus dolor, sit amet fringilla odio blandit quis. Ut iaculis tempor arcu, ac aliquam orci finibus ut. Nam porttitor rhoncus pulvinar. Suspendisse dui lorem, facilisis at risus quis, imperdiet sollicitudin est. Curabitur ac lacinia elit. Pellentesque at sem vel tortor posuere tincidunt. Nulla faucibus vel magna ac vulputate. Sed maximus est euismod, aliquam elit ac, finibus quam. Duis vel porta era.
         </Text>

         <View style={style.button}>
         <Button color='red' title='Close' onPress={props.onClose}/>
         </View>
        </ScrollView>
      </Modal>  
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'pink'
  },
  img: {
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 16,
    margin: 15,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'justify',
  },
  button: {
    width: '100%',
    alignItems: 'center',
  }
})
export default SampleModal;