import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import {  useState } from 'react';
import { format } from 'date-fns';

import Canvas from './Canvas'

// PDF styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
  },
  textBody: {
    fontSize: "12px",
  },
  textFooter: {
    fontSize: "9px",
    color: "#CECECE",
  }
});

// Create Document Component
function ExportPDF({eventName, totalVisitor }) {

  return (
    <Document>
      {/* HEADER */}
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.section}>
          <Text>Rapport de visites - Le compteur Chambraysien</Text>
        </View>

        {/* BODY */}
        <View>
          <Text>Evenement: {eventName}</Text>
          <Text>Visiteurs totaux sur la période : {totalVisitor.totalNumber} </Text>
          <Text>Visiteurs le 18 Septembre : </Text>
          <Text>Visiteurs le 19 Septembre :  </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.section}>
          <Text style={styles.textFooter}>Exporté avec l'application : Le compteur Chambraysien</Text>
        </View>
      </Page>
    </Document>

  )
}

export default ExportPDF;