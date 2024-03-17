import React from 'react'
import avatar from '../images/avatar.jpg'
import { Page, Text, Image, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

//icons
import { IoMdMail } from "react-icons/io";



const ResumePreview = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles.body, styles.flex]}>
        <View style={
          {
            width: '40%',
            backgroundColor: '#002D62',
            color: 'white',
            height: '100%'
          }}>
          <View style={[{ padding: 20 }, styles.flexC]} >
            <Image
              source={avatar}
              style={styles.avatar}
            />
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{
              fontSize: 20,
              marginBottom: 12,
              paddingVertical: 8,
              marginBottom: 8,
              borderBottom: 1,
              borderBottomColor: 'white',
            }}>Contact</Text>
            <View style={{ marginBottom: 12 }}>
              <Text>Phone</Text>
              <Text>0766 495 628</Text>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text>Email</Text>
              <Text>chrisshayo4@gmail.com</Text>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text>Address</Text>
              <Text>Dar es Salaam</Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{
              fontSize: 20,
              marginBottom: 12,
              paddingVertical: 8,
              marginBottom: 8,
              borderBottom: 1,
              borderBottomColor: 'white',
            }}>Education</Text>
            <View style={{ marginBottom: 12 }}>
              <Text>Bachelor Degree</Text>
              <Text>University of Dodoma</Text>
              <Text>2018-2021</Text>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text>Bachelor Degree</Text>
              <Text>University of Dodoma</Text>
              <Text>2018-2021</Text>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text>Bachelor Degree</Text>
              <Text>University of Dodoma</Text>
              <Text>2018-2021</Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{
              fontSize: 20,
              marginBottom: 8,
              paddingVertical: 8,
              marginBottom: 8,
              borderBottom: 1,
              borderBottomColor: 'white',
            }}>Skills</Text>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Text style={{
              fontSize: 20,
              paddingVertical: 8,
              marginBottom: 8,
              borderBottom: 1,
              borderBottomColor: 'white',
            }}>Languages</Text>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text>Bachelor Degree</Text>
            </View>

          </View>
        </View>
        <View style={{ padding: 16, width: '60%', color: '#6b7280' }}>
          <Text style={{ fontSize: 24, color: '#002D62' }}>Christopher Honest Shayo</Text>
          <Text style={{ fontSize: 12, marginBottom: 12 }}>Software Developer</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure, labore quae deserunt dolores deleniti facere cupiditate sapiente quasi similique recusandae veniam consequuntur, consectetur nulla neque commodi corrupti in pariatur?
          </Text>

          <View style={{ marginTop: 20 }}>
            <Text style={{
              fontSize: 20,
              color: '#002D62',
              borderBottom: 1,
              borderBottomColor: '#002D62',
              paddingVertical: 4,
            }}>Experience</Text>
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: '#ff6f3c' }} >
                Software Developer | GPITG LTD
              </Text>
              <Text style={{ marginVertical: 4 }}>2021-2024</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus, debitis dolorem ratione perspiciatis suscipit magnam rerum laborum voluptate nulla odio, quae voluptates, minima quis saepe consequuntur. Facilis, magnam fuga?
              </Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: '#ff6f3c' }} >
                Software Developer | GPITG LTD
              </Text>
              <Text style={{ marginVertical: 4 }}>2021-2024</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus, debitis dolorem ratione perspiciatis suscipit magnam rerum laborum voluptate nulla odio, quae voluptates, minima quis saepe consequuntur. Facilis, magnam fuga?
              </Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: '#ff6f3c' }} >
                Software Developer | GPITG LTD
              </Text>
              <Text style={{ marginVertical: 4 }}>2021-2024</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus, debitis dolorem ratione perspiciatis suscipit magnam rerum laborum voluptate nulla odio, quae voluptates, minima quis saepe consequuntur. Facilis, magnam fuga?
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{
              fontSize: 20,
              color: '#002D62',
              borderBottom: 1,
              borderBottomColor: '#002D62',
              paddingVertical: 4,
            }}>Reference</Text>
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: '#ff6f3c' }} >
                John Doe
              </Text>
              <Text>Lecturer | University of Dodoma</Text>
              <Text>email@gmail.com</Text>
              <Text>0766 495 628</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: '#ff6f3c' }} >
                John Doe
              </Text>
              <Text>Lecturer | University of Dodoma</Text>
              <Text>email@gmail.com</Text>
              <Text>0766 495 628</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={{ color: '#ff6f3c' }} >
                John Doe
              </Text>
              <Text>Lecturer | University of Dodoma</Text>
              <Text>email@gmail.com</Text>
              <Text>0766 495 628</Text>
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
    width: '100%',
    height: '100%',
    fontSize: 12
  },
  flex: {
    flexDirection: 'row',
  },
  flexA: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '100%'
  },
  icon: {
    width: 20,
    height: 20
  },
  tab: {
    backgroundColor: '#6b7280',
    color: 'white',
    padding: 2,
    width: '100%'
  }
});

