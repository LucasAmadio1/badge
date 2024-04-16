import { Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from "react-native";

type Props  = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...props}: Props) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      disabled={isLoading}
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
    >
      { isLoading ? (
        <ActivityIndicator className="text-green-500"/> 
      ) : (  
        <Text className="text-green-500 text-base font-bold uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}