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
`expo install expo-constants`
`import Constants from 'expo-constants'`
and add padding
`paddingTop: Constants.statusBarHeight`
When using SafeAreaView with the Constants.statusBarHeight padding will have no impact

<https://docs.expo.io/versions/latest/>
[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
`expo install react-native-gesture-handler`
When we use **expo install**, it will make sure the library that is installed to be compatible with the version of expo that we are using
If we're using a library that is part of the expo eco system it's better to use **expo install**

Simply passing a reference of the component, we cannot set props this way
`renderRightActions={ListItemDeleteAction}`
Pass a function and render the component so we can pass props
`renderRightActions={() => <ListItemDeleteAction />}`

If key and value are same as shown below (Check Icon Component),
`backgroundColor: backgroundColor`
we can just use the shorthand value
`backgroundColor`
