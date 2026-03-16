import React from "react";
import { View, Text, Image } from "react-native";

function App() {
  var OPCAO = "Tela1"; // alterar aqui pra visualizar as diferentes telas

  var BG = "#f6e19a";
  var BLUE = "#6fc2e6";
  var DARKBLUE = "#2f5f91";
  var GREEN = "#2fb26a";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BG,
        padding: 12,
        alignItems: "center",
      }}
    >
      {OPCAO === "Tela1" ? (
        <View
          style={{
            width: "100%",
            borderRadius: 18,
            backgroundColor: "#fff",
            overflow: "hidden",
            paddingBottom: 12,
          }}
        >
          <View
            style={{
              margin: 12,
              height: 44,
              backgroundColor: "#eef6fb",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ color: "#7ea8c9" }}>🔍 Search</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 12,
              marginBottom: 6,
            }}
          >
            <View
              style={{
                backgroundColor: BLUE,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                marginRight: 8,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "700" }}>
                Education
              </Text>
            </View>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#d9eef8",
                marginRight: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>＋</Text>
            </View>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#d9eef8",
                marginRight: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>⚑</Text>
            </View>
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#d9eef8",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>⚑</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 12, marginBottom: 6 }}>
            <Text style={{ color: "#7ea8c9" }}>300 Results</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 12,
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/images/avatar1.png")}
              style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                marginRight: 12,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: DARKBLUE, fontWeight: "700", marginBottom: 6 }}
              >
                Lorem ipsum dolor sit
              </Text>
              <Text style={{ color: "#7ea8c9", marginBottom: 8 }}>
                amet, consectetuer adipiscing elit, sed diam nonummy nibh.
              </Text>
              <View
                style={{
                  height: 10,
                  backgroundColor: "#e6f0f6",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: "55%",
                    height: "100%",
                    backgroundColor: GREEN,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 12,
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/images/avatar2.png")}
              style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                marginRight: 12,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: DARKBLUE, fontWeight: "700", marginBottom: 6 }}
              >
                Lorem ipsum dolor sit
              </Text>
              <Text style={{ color: "#7ea8c9", marginBottom: 8 }}>
                amet, consectetuer adipiscing elit, sed diam nonummy nibh.
              </Text>
              <View
                style={{
                  height: 10,
                  backgroundColor: "#e6f0f6",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: "65%",
                    height: "100%",
                    backgroundColor: GREEN,
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ paddingHorizontal: 12, marginBottom: 12 }}>
            <Image
              source={require("./assets/images/banner_education.png")}
              style={{ width: "100%", height: 140, borderRadius: 12 }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ color: "#7ea8c9", width: "48%" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing.
            </Text>
            <Text style={{ color: "#7ea8c9", width: "48%" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing.
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            borderRadius: 18,
            backgroundColor: "#fff",
            overflow: "hidden",
            alignItems: "center",
            paddingBottom: 18,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: BLUE,
              height: 220,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("./assets/images/avatar_big.png")}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
          </View>

          <View
            style={{
              width: "92%",
              backgroundColor: "#fff",
              borderRadius: 12,
              marginTop: -30,
              padding: 18,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: DARKBLUE,
                fontWeight: "800",
                fontSize: 20,
                marginBottom: 8,
              }}
            >
              Lorem ipsum dolor
            </Text>
            <Text
              style={{
                color: "#7ea8c9",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer diam adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet.
            </Text>

            <View
              style={{
                width: "80%",
                backgroundColor: "#eef6fb",
                borderRadius: 12,
                paddingVertical: 14,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ color: GREEN, fontWeight: "800", fontSize: 28 }}>
                $120.00
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: 70,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: "#d7e8f3",
                justifyContent: "center",
                paddingHorizontal: 12,
                marginBottom: 14,
              }}
            >
              <Text style={{ color: "#9fbad0" }}>ENTER TEXT HERE</Text>
            </View>

            <View
              style={{
                width: "100%",
                backgroundColor: GREEN,
                borderRadius: 14,
                paddingVertical: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                DONATE
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default App;
