/**
 * Automatically generated types for motia
 * Do NOT edit this file manually.
 * 
 * Consider adding this file to .prettierignore and eslint ignore.
 */
import { EventHandler, ApiRouteHandler, ApiResponse, MotiaStream } from 'motia'

declare module 'motia' {
  interface FlowContextStateStreams {
    
  }

  type Handlers = {
    'UploadImage': ApiRouteHandler<Record<string, unknown>, ApiResponse<200, { message: string; traceId: string; imageMetadata: { originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: string } }> | ApiResponse<400, { error: string; details?: string }> | ApiResponse<500, { error: string; details?: string }>, { topic: 'image-saved'; data: { originalFilename: string; uniqueFilename: string; format: string; originalPath: string; traceId: string; uploadedAt: unknown } }>
    'MobileResize': EventHandler<{ originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown }, { topic: 'mobile-resize-complete'; data: { originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown; resizeType: 'desktop' | 'mobile' | 'lowquality'; outputPath: string; targetWidth: number; quality?: number; completedAt: unknown } }>
    'LowQualityResize': EventHandler<{ originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown }, { topic: 'lowquality-resize-complete'; data: { originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown; resizeType: 'desktop' | 'mobile' | 'lowquality'; outputPath: string; targetWidth: number; quality?: number; completedAt: unknown } }>
    'DesktopResize': EventHandler<{ originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown }, { topic: 'desktop-resize-complete'; data: { originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown; resizeType: 'desktop' | 'mobile' | 'lowquality'; outputPath: string; targetWidth: number; quality?: number; completedAt: unknown } }>
    'CompletionTracker': EventHandler<{ originalFilename: string; uniqueFilename: string; format: 'jpeg' | 'png' | 'webp'; originalPath: string; traceId: string; uploadedAt: unknown; resizeType: 'desktop' | 'mobile' | 'lowquality'; outputPath: string; targetWidth: number; quality?: number; completedAt: unknown }, never>
  }
}