import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';


const ResumePreview = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.body}>
        <View style={styles.flex_c}>
          <View style={{ textAlign: 'center', width: '100%', padding: 20 }}>
            <Text style={styles.text_large}>CHRISTOPHER HONEST SHAYO</Text>
            <Text style={{ color: '#ff6f3c', textTransform: 'uppercase' }}>
              web developer
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={{ width: '40%', padding: 20, marginTop: 12 }}>
            <View>
              <View style={[styles.flex, { marginBottom: 8 }]}>
                <Text style={styles.boldText}>Email</Text>
                <Text style={{ marginLeft: 8 }}>chrisshayo4@gmail.com</Text>
              </View>
              <View style={[styles.flex, { marginBottom: 8 }]}>
                <Text style={styles.boldText}>Phone</Text>
                <Text style={{ marginLeft: 8 }}>0766495628</Text>
              </View>
              <View style={[styles.flex, { marginBottom: 8 }]}>
                <Text style={styles.boldText}>Address</Text>
                <Text style={{ marginLeft: 8 }}>Dar Es Salaam, Tanzania</Text>
              </View>
              <View style={[styles.flex, { marginBottom: 8 }]}>
                <Text style={styles.boldText}>Email</Text>
                <Text style={{ marginLeft: 8 }}>chrisshayo4@gmail.com</Text>
              </View>
            </View>
            <View style={{ marginBottom: 14 }}>
              <Text style={[styles.boldText, { marginVertical: 8, color: '#ff6f3c' }]}>EDUCATION</Text>
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.boldText, { paddingBottom: 4, textTransform: 'capitalize' }]}>
                  bachelor degree
                </Text>
                <Text style={[{ paddingBottom: 4, textTransform: 'capitalize' }]}>
                  university of Dodoma
                </Text>
                <Text style={[{ marginBottom: 6 }]}>march 2012 - june 2016</Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.boldText, { paddingBottom: 4, textTransform: 'capitalize' }]}>
                  bachelor degree
                </Text>
                <Text style={[{ paddingBottom: 4, textTransform: 'capitalize' }]}>
                  university of Dodoma
                </Text>
                <Text style={[{ marginBottom: 6 }]}>march 2012 - june 2016</Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.boldText, { paddingBottom: 4, textTransform: 'capitalize' }]}>
                  bachelor degree
                </Text>
                <Text style={[{ paddingBottom: 4, textTransform: 'capitalize' }]}>
                  university of Dodoma
                </Text>
                <Text style={[{ marginBottom: 6 }]}>march 2012 - june 2016</Text>
              </View>

            </View>

          </View>

          <View style={{ width: '60%', padding: 20 }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={[styles.boldText, { paddingBottom: 4, color: '#ff6f3c' }]}>
                INTRODUCTION
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem possimus magni aliquid excepturi rerum vel facere corporis, quasi dolor nostrum id. Ad voluptas suscipit distinctio praesentium nisi qui recusandae?
              </Text>
            </View>

            <View style={{ marginBottom: 14 }}>
              <Text style={[styles.boldText, { paddingBottom: 4, color: '#ff6f3c' }]}>EXPERIENCE</Text>
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.boldText, { paddingBottom: 4, textTransform: 'capitalize' }]}>
                  software developer | GPITG LTD
                </Text>
                <Text style={[styles.boldText, { marginBottom: 6 }]}>march 2012 - june 2016</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem possimus magni aliquid excepturi rerum vel facere corporis, quasi dolor nostrum id. Ad voluptas suscipit distinctio praesentium nisi qui recusandae?
                </Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.boldText, { paddingBottom: 4, textTransform: 'capitalize' }]}>
                  software developer | GPITG LTD
                </Text>
                <Text style={[styles.boldText, { marginBottom: 6 }]}>march 2012 - june 2016</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem possimus magni aliquid excepturi rerum vel facere corporis, quasi dolor nostrum id. Ad voluptas suscipit distinctio praesentium nisi qui recusandae?
                </Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                <Text style={[styles.boldText, { paddingBottom: 4, textTransform: 'capitalize' }]}>
                  software developer | GPITG LTD
                </Text>
                <Text style={[styles.boldText, { marginBottom: 6 }]}>march 2012 - june 2016</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem possimus magni aliquid excepturi rerum vel facere corporis, quasi dolor nostrum id. Ad voluptas suscipit distinctio praesentium nisi qui recusandae?
                </Text>
              </View>
            </View>


            <View style={{ marginBottom: 12 }}>
              <Text style={[styles.boldText, { paddingBottom: 4, color: '#ff6f3c' }]}>
                SKILLS
              </Text>
              <View style={styles.flex_b}>
                <View>
                  <Text>James john</Text>
                  <Text>Lecturer</Text>
                  <Text>Udom</Text>
                </View>
                <View>
                  <Text>James john</Text>
                  <Text>Lecturer</Text>
                  <Text>Udom</Text>
                </View>
                <View>
                  <Text>James john</Text>
                  <Text>Lecturer</Text>
                  <Text>Udom</Text>
                </View>


              </View>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text style={[styles.boldText, { paddingBottom: 4, color: '#ff6f3c' }]}>
                REFEREES
              </Text>
              <View style={styles.flex_b}>
                <View>
                  <Text>James john</Text>
                  <Text>Lecturer</Text>
                  <Text>Udom</Text>
                </View>
                <View>
                  <Text>James john</Text>
                  <Text>Lecturer</Text>
                  <Text>Udom</Text>
                </View>
                <View>
                  <Text>James john</Text>
                  <Text>Lecturer</Text>
                  <Text>Udom</Text>
                </View>

              </View>
            </View>
          </View>
        </View>

      </View>
    </Page>
  </Document>
)

export default ResumePreview

const styles = StyleSheet.create({
  body: {
    padding: 20,
    fontSize: 12,
    color: '#64748b'
  },
  flex_c: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex_b: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flex: {
    flexDirection: 'row',
  },
  text_large: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#002D62'
  },
  boldText: {
    color: '#020617'
  },
  text_uppercase: {
    textTransform: 'uppercase'
  }

});

