import React from "react";
import { View, Text, Image } from "react-native";

function App() {
  const TITULO = "Project 0023R";
  const SUBTITULO =
    "Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc. Dunt ut laoreet.";
  const TEXTO1 = "Lorem ipsum dolor sit amet";
  const TEXTO2 = "Lorem ipsum dolor sit amet";
  const TEXTO3 = "Lorem ipsum dolor sit amet";
  const FUNDOTELA = "#ffd84a";
  const FUNDOCARD = "#ffffff";
  const CORTEXTO = "#2a6fb3";
  const FONTETITULO = 26;
  const FONTETEXTO = 14;
  const progressPercent = 0.68;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: FUNDOTELA,
        padding: 12,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 56,
          backgroundColor: "#2a6fb3",
          borderRadius: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 14,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>‹ Technology</Text>
        <Image
          source={require("./assets/images/pngtree-message-indicator-bell-icon-isolated-vector-illustration-sign-attention-message-vector-png-image_12211076.png")}
          style={{ width: 28, height: 28, tintColor: "white" }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          width: "100%",
          borderRadius: 18,
          overflow: "hidden",

          elevation: 4,
        }}
      >
        <View
          style={{
            backgroundColor: "#ff9f1c",
            height: 200,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            source={require("./assets/images/celular.png")}
            style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              top: -10,
              opacity: 0.25,
            }}
            resizeMode="cover"
          />

          <View
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              backgroundColor: "rgba(255,255,255,0.85)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#ffffff",
                opacity: 0.95,
                transform: [{ translateX: 2 }],
              }}
            >
              ▶
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: FUNDOCARD,
            paddingHorizontal: 18,
            paddingTop: 18,
            paddingBottom: 22,
          }}
        >
          <Text
            style={{
              fontSize: FONTETITULO,
              color: CORTEXTO,
              fontWeight: "800",
              marginBottom: 6,
            }}
          >
            {TITULO}
          </Text>

          <Text
            style={{
              fontSize: FONTETEXTO,
              color: "#8aa0b9",
              marginBottom: 16,
              lineHeight: 20,
            }}
          >
            {SUBTITULO}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ width: 60, color: CORTEXTO, fontWeight: "600" }}>
              ${0}
            </Text>

            <View
              style={{
                flex: 1,
                height: 14,
                borderRadius: 12,
                backgroundColor: "#dfeff7",
                overflow: "hidden",
                marginHorizontal: 8,
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: `${Math.min(Math.max(progressPercent, 0), 1) * 100}%`,
                  backgroundColor: "#17b7a6",
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              />
            </View>

            <Text
              style={{
                width: 80,
                textAlign: "right",
                color: CORTEXTO,
                fontWeight: "600",
              }}
            >
              ${110000}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "48%",
                backgroundColor: "#05b389",
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>
                $100
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 12,
                  marginTop: 6,
                }}
              >
                Lorem ipsum dolor
              </Text>
            </View>

            <View
              style={{
                width: "48%",
                backgroundColor: "#05b389",
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>
                $50
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 12,
                  marginTop: 6,
                }}
              >
                Lorem ipsum dolor
              </Text>
            </View>

            <View
              style={{
                width: "48%",
                backgroundColor: "#05b389",
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>
                $20
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 12,
                  marginTop: 6,
                }}
              >
                Lorem ipsum dolor
              </Text>
            </View>

            <View
              style={{
                width: "48%",
                backgroundColor: "#05b389",
                borderRadius: 12,
                paddingVertical: 16,
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>
                $10
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: 12,
                  marginTop: 6,
                }}
              >
                Lorem ipsum dolor
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;
