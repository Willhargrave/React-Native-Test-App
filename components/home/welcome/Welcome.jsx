import { useState } from 'react'
import { View, 
  Text, 
  TextInput,
  Image,
Flatlist} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const jobTypes = ["Full-time", "Part-time", "Contractor"]
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time")
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello Will</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput 
        style={styles.searchInput}
        value=""
        onChange={() => {}}
        placeholder="Search for jobs"
        />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
        <Image
        source={icons.search}
        resizeMode='contain'
        style={styles.searchBtnImage}></Image>
      </TouchableOpacity>
    </View>
    <View style={styles.tabsContainer}>
      <Flatlist 
      data={jobTypes}
      renderItem={({item }) => (
        <TouchableOpacity
        style={styles.tab(activeJobType, item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}/>
    </View>
    </View>
  )
}

export default Welcome;