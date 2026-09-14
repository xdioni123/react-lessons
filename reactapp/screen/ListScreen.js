import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const students = [
    {name: 'Gerti', surname: 'Calaj', age: '13'},
    {name: 'Deon', surname: 'Beka', age: '16'},
    {name: 'Amar', surname: 'Buzuku', age: '16'}
];

const ListScreen = () => {
    return (
        <View>
            <Text>List Screen:</Text>

            <View style={styles.row}>
                <Text style={styles.column}>Name</Text>
                <Text style={styles.column}>Surname</Text>
                <Text style={styles.column}>Age</Text>
            </View>

            <FlatList
                data={students}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.column}>{item.name}</Text>
                            <Text style={styles.column}>{item.surname}</Text>
                            <Text style={styles.column}>{item.age}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    column: {
        width: 100
    }
});

export default ListScreen;
