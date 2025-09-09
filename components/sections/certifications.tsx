'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { certifications } from '@/content/certifications';
import Link from 'next/link';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <span className="text-green-600 font-semibold text-lg uppercase tracking-wider">
              Professional Credentials
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Professional Certifications
          </h2>
          <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Achievements
          </span>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications that validate my expertise in modern technologies 
            and development practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/30 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-green-600 transition-colors mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.issueDate}</span>
                        {cert.expiryDate && (
                          <>
                            <span>-</span>
                            <span>{cert.expiryDate}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Skills Covered</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="space-y-3 mt-auto">
                    {cert.credentialId && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                    )}
                    
                    {cert.credentialUrl && (
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Credential
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {certifications.length}+
                  </div>
                  <p className="text-sm text-muted-foreground">Professional Certifications</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {certifications.filter(cert => cert.expiryDate).length}
                  </div>
                  <p className="text-sm text-muted-foreground">Active Certifications</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {new Set(certifications.flatMap(cert => cert.skills)).size}+
                  </div>
                  <p className="text-sm text-muted-foreground">Validated Skills</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
