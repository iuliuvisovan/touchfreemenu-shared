export type WaiterCall = {
  targetUserId: string
  targetUsername: string
  ip: string
  deviceId: string
  coordinates: { latitude: number; longitude: number }
  timestamp: number
  createdAt: Date
}
