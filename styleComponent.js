import {StyleSheet} from 'react-native';

const styleComponent = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
      },
      upper: {
        backgroundColor: '#24316E',
        height: 200,
        borderRadius: 35,
      },
      lowerUp: {
        height: 120,
        borderRadius: 35,
        marginTop: 20,
        backgroundColor: '#24316E'
      },
      text:{

      },
      
      input1: {
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'left',
        borderColor: "gray",
        width: 350,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        margin: 20,
        marginBottom: 0,
      },
      
      upText:{
        fontSize:30, 
        marginLeft:100, 
        marginTop:50, 
        color:'white'
    },

      upText1: { 
        textAlign: 'center', 
        marginTop: 20, 
        fontSize: 20 
      },
      upButton: { 
        backgroundColor: '#24316E', 
        borderRadius: 30, 
        height: 45, width: 
        300, marginLeft: 50, 
        marginTop: 20, 
        justifyContent: 'center' 
      },
      upTextButton: { 
        color: 'white', 
        textAlign: 'center', 
        fontSize: 20 
      },
      upText2: { 
        marginLeft: 80, 
        marginTop: 10, 
        fontSize: 18 
      },
   
      
   
    });
    
export default styleComponent;