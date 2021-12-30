import React, { Component } from 'react'
import { Button, Text, View,SafeAreaView } from 'react-native'
import Realm  from "realm";


export default class Realmdata extends Component {  
    render() {
        const employee = {
            name: "Employee",
            properties: {
              first_name: "string",
              salary: "string",
              designation: "string",
              employee_id:'string'
            },
          };

        function addUser(){
            Realm.open({
                schema:[employee]
            })
            .then(items=>{
                items.write(()=>{
                    items.create('Employee',{
                        first_name:'vidhi',
                        salary:12000,
                        designation:'Software Developer',
                        employee_id:1
                    });
                });
                console.log('user add successfully')
                items.close();
            })
            .catch(err=>{
                console.log(err);
            });
        }
    
        function onShowUser(){
            Realm.open({
                schema:[employee]
            })
            .then(items=>{
                console.log('user',items.objects('Employee'));
            })
        }
    
        return (
            <View style={{marginTop:40}}>
                <Button title="Add user"
                    onPress={addUser}
                />
                <Button title="Show user"
                    onPress={onShowUser}
                />
            </View>
        )
    }
}
