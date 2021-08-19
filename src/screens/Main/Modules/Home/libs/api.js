// import './mock'
import { Request, instance as axios } from '@/libs/axios'
import { HOST } from '@/libs/api'

export function fetchFeatures() {
    const url = `${HOST}/api/features`;

    return Request({ url });
}

export function fetchOptimizationList() {
    const url = `${HOST}/api/optimizationList`;

    return Request({ url });
}