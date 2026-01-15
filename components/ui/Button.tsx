import { Colors } from '@/constants/theme';
import React, { forwardRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonProps = {
    text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
    ({ text, ...PressableProps }, ref ) => (
    <Pressable ref={ref} {...PressableProps} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
))

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },
});

export default Button