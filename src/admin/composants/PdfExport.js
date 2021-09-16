import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../assets/logo.jpg'

// PDF styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 30,
    padding: 10,
  },

  mainTitle: {
    color: "#00A4B9",
  },
  logotype:{
    width: '3cm',
    height: 'auto',
  },
  title: {
    fontSize: '18px',
    fontWeight: '800',
    marginBottom: '10px',
  },
  textBody: {
    fontSize: "12px",
    marginTop: "20px",
  },
  image: {
    width: '18cm',
    height: 'auto',
    marginTop: "40px"
  },
  containerFooter:{
    position: 'absolute',
    top: '27cm',
  },
  textFooter: {
    fontSize: "9px",
    color: "#CECECE",
    marginLeft: '20px',
  },
  
});

// Create Document Component
function ExportPDF({eventName, totalVisitor, image, dataFD, dataSD }) {

  return (
    <Document>
      {/* HEADER */}
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View>
          <Image style={styles.logotype} src={logo}></Image>
          <Text style={styles.mainTitle}>Rapport de visites - Le compteur Chambraysien</Text>
        </View>

        {/* BODY */}
        <View>
          <Text style={styles.title}>Evenement: {eventName}</Text>
          <Text style={styles.textBody}>Visiteurs totaux sur la période : {totalVisitor.totalNumber} </Text>
          <Text style={styles.textBody}>Visiteurs le 18 Septembre : {dataFD} </Text>
          <Text style={styles.textBody}>Visiteurs le 19 Septembre : {dataSD} </Text>

          <Image style={styles.image} src={image}></Image>
        </View>

        {/* FOOTER */}
        <View style={styles.containerFooter}>
          <Text style={styles.textFooter}>Exporté avec l'application : Le compteur Chambraysien</Text>
        </View>
      </Page>
    </Document>

  )
}

export default ExportPDF;