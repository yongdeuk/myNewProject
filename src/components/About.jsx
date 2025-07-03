import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Coffee, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, label: '프로젝트 완료', value: '50+' },
    { icon: Coffee, label: '커피 컵', value: '1000+' },
    { icon: Heart, label: '만족한 고객', value: '20+' },
    { icon: User, label: '경력 연차', value: '3+' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            저에 대해 알아보세요
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            열정적인 개발자로서 사용자 중심의 웹 애플리케이션을 만들어내는 것을 좋아합니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                개발 철학
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>사용자 중심 설계:</strong> 항상 사용자의 관점에서 생각하고, 직관적이고 접근하기 쉬운 인터페이스를 만듭니다.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>최신 기술 활용:</strong> React, TypeScript, Tailwind CSS 등 현대적인 기술 스택을 활용하여 효율적인 개발을 진행합니다.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>지속적인 학습:</strong> 기술의 빠른 변화에 맞춰 새로운 도구와 방법론을 꾸준히 학습하고 적용합니다.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>팀워크 중시:</strong> 다른 개발자들과의 협업을 통해 더 나은 솔루션을 만들어내는 것을 중요하게 생각합니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  경력 및 교육
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900">프론트엔드 개발자</h4>
                    <p className="text-gray-600">ABC 테크놀로지 | 2022 - 현재</p>
                    <p className="text-sm text-gray-500 mt-1">
                      React 기반 웹 애플리케이션 개발 및 유지보수
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900">웹 개발 인턴</h4>
                    <p className="text-gray-600">XYZ 스타트업 | 2021 - 2022</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Vue.js를 활용한 관리자 대시보드 개발
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900">컴퓨터 공학 학사</h4>
                    <p className="text-gray-600">한국대학교 | 2017 - 2021</p>
                    <p className="text-sm text-gray-500 mt-1">
                      소프트웨어 공학 전공
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 