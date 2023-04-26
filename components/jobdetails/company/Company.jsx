import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants';
import { checkImageURL } from '../../../utils';
const Company = (companyLogo, jobTitle, companyName, location) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
        source={{
          url: checkImageURL(companyLogo)
          ? companyLogo 
          : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
        }}
        style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  )
}

export default Company