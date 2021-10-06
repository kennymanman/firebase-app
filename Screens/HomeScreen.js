import React from 'react'
import { View, Text } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';



export default function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>

            <BottomSheet
        ref={this.bs}
        snapPoints={[330, -5]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
        </View>
    )
}
