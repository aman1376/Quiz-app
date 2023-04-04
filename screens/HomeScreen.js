import React, { Component } from 'react'
import { Text, View ,Image,Pressable} from 'react-native'
import {useNavigation} from "@react-navigation/native"

export default function HomeScreen() {
    const navigation=useNavigation()
    return (
      <View style={{marginTop:-20}}>
        <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        />
        <View style={{ padding: 10,marginTop:-20 }}>
            <Text
            style={{
                textAlign: "center",
                color: "magenta",
                fontSize: 20,
                fontWeight: "600",
            }}
            >
            QUIZ RULES
            </Text>

            <View
            style={{
                padding: 10,
                backgroundColor: "#F88379",
                borderRadius: 6,
                marginTop: 15,
            }}
            >
                <View
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                    }}
                >
                    <Text style={{ color: "white" }}>•</Text>
                    <Text
                    style={{
                        marginLeft: 4,
                        color: "#722F37",
                        fontSize: 15,
                        fontWeight: "500",
                    }}
                    >
                    For each correct answer you get 5 points
                    </Text>
                </View>

                <View
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                    }}
                >
                    <Text style={{ color: "white" }}>•</Text>
                    <Text
                    style={{
                        marginLeft: 4,
                        color: "#722F37",
                        fontSize: 15,
                        fontWeight: "500",
                    }}
                    >
                    Each question has a time limit of 15 sec
                    </Text>
                </View>

                <View
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 5,
                    }}
                >
                    <Text style={{ color: "white" }}>•</Text>
                    <Text
                    style={{
                        marginLeft: 4,
                        color: "#722F37",
                        fontSize: 15,
                        fontWeight: "500",
                    }}
                    >
                    You should answer all the questions compulsarily
                    </Text>
                </View>
            </View>
        </View>
        <Pressable onPress={()=>navigation.navigate("Quiz")} style={{
          backgroundColor: "magenta",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}>
            <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Start Quiz</Text>
        </Pressable>
     </View>
      
    )
}
