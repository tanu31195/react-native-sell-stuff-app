# react-native-sell-stuff-app

## Notes

Multiples styles can be passed as an array
`style={[styles.button, {backgroundColor: colors[color]}]}`

Images
Below line tries to load the image(path/url) dynamically. RN cannot determine which image to bundle
`<Image style={styles.image} source={require(image)} />`

To solve this we can pass the require in the image prop(require('path'))
`<Image style={styles.image} source={image} />`

FlatList
A unique key is required for every item in the list. We can use the below function to set it if the default **item.key** is unavailable
`keyExtractor={}`

SafeAreaView
In iOS this will work but for Android we need to set padding. For that we can use the Platform and StatusBar APIs.
`paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0`
Another alternative is to use **Expo Constants**
`import Constants from 'expo-constants'`
and add padding
`paddingTop: Constants.statusBarHeight`
When using SafeAreaView with the Constants.statusBarHeight padding will have no impact
