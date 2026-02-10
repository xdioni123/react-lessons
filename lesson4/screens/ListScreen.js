import React from "react";
import {Text, StyleSheet, View, Flatlist} from "react-native";

const students = [
    {name: 'Jon', surname: 'Behra', age: 17},
    {name: 'Leo', surname: 'Krasniqi', age: 16},
    {name: 'Dion', surname: 'Ibrahimi', age: 17},
    {name: 'Jon', surname: 'Behra', age: 26},
]

const ListScreen = () => {
    return(
        <View>
            <Text style={styles.textStyle}>List of students</Text>
            <Flatlist
                data={students}
                horizontal={true}
                showHorizontalScrollIndicator={false}
                keyExtractor={student => student.name}   
                renderItem={({item}) => {
                    return <Text style={styles.studentsWraper}>{item.name} {item.surname} - {item.age}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ListScreen;
