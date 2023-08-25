import { Button, FlatList, StyleSheet, Text, TextInput, View ,Keyboard} from 'react-native'
import React, { useState } from 'react'

const CRUDn = () => {
    const [list, setList] = useState([]);   //stored
    const [input, setInput] = useState('');  //textinput
    const [editingIndex, setEditingIndex] = useState(-1); //updating

    const addTask = () => {
        if (input.trim() !== '') {
            if (editingIndex === -1) {
                // Create new task
                setList([...list, { text: input }]);
            } else {
                // Update existing task
                const updatedTasks = [...list];
                updatedTasks[editingIndex].text = input;
                setList(updatedTasks);
                setEditingIndex(-1);
            }
            setInput('');
            Keyboard.dismiss();
        }
    };
    const editTask = index => {
        setInput(list[index].text);
        setEditingIndex(index);
    };

    const deleteTask = index => {
        const updatedTasks = [...list];
        updatedTasks.splice(index, 1);
        setList(updatedTasks);
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                placeholder="Enter a task"
                value={input}
                onChangeText={text => setInput(text)}
            />
            <Button title={editingIndex === -1 ? 'Add Task' : 'Update Task'} onPress={addTask} />
            <FlatList
                data={list}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text>{item.text}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Button title="Edit" onPress={() => editTask(index)} />
                            <Button title="Delete" onPress={() => deleteTask(index)} />
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};
export default CRUDn

// const styles = StyleSheet.create({
//     topbar: {
//         fontSize: 30,
//         marginHorizontal: 50,
//         borderBottomWidth: 1,
//         borderBottomColor: 'skyblue'
//     },
//     inputType: {
//         marginBottom: 10,
//         borderWidth: 1,
//         borderColor: 'orange',
//         color: 'green'
//     },
//     container: {
//         marginTop: 20,
//         marginHorizontal: 10,
//     },
//     shows: {
//         margin: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     }
// })
























// const Write = () => {



//     // const [items, setItems] = useState([]);
//     // const [inputValue, setInputValue] = useState('');

//     // const addItem = () => {
//     //     if (inputValue.trim() !== '') {
//     //         setItems([...items, inputValue]);
//     //         setInputValue('');
//     //     }
//     // };

//     return (
//         );
//     };
    
    
    
//     export default Write
    
// //     const styles = StyleSheet.create({
// //     textinput: {
// //         padding: 19,
// //         borderWidth: 2,
// //         borderColor: 'skyblue',
// //         marginBottom: 10,
// //     }
// // })

// // <View style={{ padding: 20 }}>
// //     <TextInput
// //         // style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
// //         style={styles.textinput}
// //         placeholder="Enter an item"
// //         value={inputValue}
// //         onChangeText={text => setInputValue(text)}
// //     />
// //     <Button title="Add Item" onPress={addItem} />
// //     <FlatList
// //         data={items}
// //         renderItem={({ item }) => <Text>{item}</Text>}
// //         // keyExtractor={(item, index) => index.toString()}
// //         style={{ marginTop: 20 }}
// //     />
// // </View>